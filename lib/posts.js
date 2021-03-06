import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import { rehype } from "rehype";
import html from 'remark-html'
import addClasses from 'rehype-add-classes';

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })
    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'example-post'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'post-about-stuff'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    const contents = await rehype()
        .use(addClasses, {
            h1: 'text-2xl font-medium',
            h3: 'mt-24 text-center text-purple-600',
            h5: 'text-red-600',
            h6: 'text-gray-500 text-center text-sm font-thin',
            blockquote: 'p-4 italic border-l-4 border-neutral-500 quote font-medium',
            ul: 'list-disc',
            code: 'dark:text-emerald-400 not-prose text-green-400 p-1 object-scale-down shrink xs:text-sm',
            pre: 'object-scale-down text-sm shrink',
            a: 'text-blue-700',
            img: 'object-scale-down shrink',
            p: 'object-scale-down shrink',
        })
        .process(contentHtml)

    const htmlString = contents.value;

    // Combine the data with the id and contentHtml
    return {
        id,
        htmlString,
        ...matterResult.data
    }
}
