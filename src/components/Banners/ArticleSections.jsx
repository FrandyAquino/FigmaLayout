import React from 'react'
import Layout from '@Layout/Layout.jsx'
import TitleSections from '@components/Typography/TitleSections';
import TextButton from '@components/Buttons/TextButton';
import ArticleImg from '@/assets/article1.png';
import ArticleImg2 from '@/assets/article2.png';
import ArticleImg3 from '@/assets/article3.png';
import ArticleImg4 from '@/assets/article4.png';

const article = [
    {
        id: 1,
        img: ArticleImg,
        title: 'How much does it cost to finish an apartment?',
        content: 'Are you standing on the threshold of your own "M", to which you have just picked up the keys, and with the eye...'
    },
    {
        id: 2,
        img: ArticleImg2,
        title: 'Demolition of the load-bearing wall',
        content: 'Are you planning a home renovation or renovation? Your vision is limited by the load-bearing wall, which you...'
    },
    {
        id: 3,
        img:  ArticleImg3,
        title: 'What color to paint a hall in a block of flats? ',
        content: 'Matching the right paint is a real challenge. If you are wondering what color to paint your hall with, you can...'
    },
    {
        id: 4,
        img: ArticleImg4,
        title: 'How does a concrete pump work?',
        content: 'A concrete pump is currently one of the most common equipment used on construction sites. Its operation...'
    }
]

function ArticleSections() {
    return (
        <div className='pt-6'>
            <Layout>
                <TitleSections title="Hints for you" subtitle="Show all hints" />
                <div className='flex gap-4 pb-10'>
                    {article.map((articles) => (
                        <div key={articles.id} className="flex items-center justify-center">
                            <div className='border border-[#0000000c] rounded-lg'>
                                <img src={articles.img} alt={articles.title} className="w-full h-62 " />
                                <div className='w-full rounded-b-lg p-2'>
                                    <h3 className='font-bold text-xl py-3'>{articles.title}</h3>
                                    <p className='pb-4'>{articles.content}</p>
                                    <TextButton iconPosition="right" state="defaultb">Read more</TextButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </div>
    )
}

export default ArticleSections