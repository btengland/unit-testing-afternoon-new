import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './__data__/testData'

test('shortenText does not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(shortText.length)
})

test('shortenText shortens text over 100 characters', () => {
    const short = shortenText(longText)
    expect(short.slice(-3)).toBe('...')
    expect(short).not.toHaveLength(longText.length)
})

test('wordCount counts the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUserName attaches a users full name to a post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName removes any post with no matching user', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts).not.toContainEqual(posts[5])
})