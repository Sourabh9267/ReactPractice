import React from 'react'

function Card() {

    const data = [
        {
            img: 'https://png.pngtree.com/thumb_back/fh260/background/20220614/pngtree-blackbackgrounded-amazon-prime-or-shipping-box-market-fast-parcel-photo-image_36793638.jpg',
            title: 'Amazon Basics',
            desc: 'A global e-commerce giant, Amazon offers a vast range of products including electronics, apparel, books, and more, alongside services like Amazon Prime, which includes fast shipping and streaming entertainment.'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOvzpHSH0HJy-yJzJsQzqGwzjlsqs0aYcqg&s',
            title: 'Flipkart Megastore',
            desc: 'One of India’s largest e-commerce platforms, Flipkart offers products ranging from electronics to fashion and groceries. It\'s known for its frequent sales events and wide delivery network across India.'
        },
        {
            img: 'https://etimg.etb2bimg.com/photo/54429313.cms',
            title: 'Snapdeal.com',
            desc: 'Snapdeal is an Indian online marketplace that focuses on providing affordable products across various categories, such as home essentials, fashion, and electronics, catering primarily to budget-conscious consumers.'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt-_q9V9PlF0BxlxSVj09OT7H41z1FjPB2A&s',
            title: 'Tata CliQ',
            desc: 'Tata CliQ is an omnichannel e-commerce platform offering products in fashion, electronics, and luxury items, combining both online shopping and in-store experiences backed by the Tata brand\'s trust.'
        },
        {
            img: 'https://i.pinimg.com/originals/bb/db/38/bbdb38ad5947cf5189b8d4b685a93499.png',
            title: 'Croma- A Tata Enterprise',
            desc: 'Croma is a leading Indian retailer specializing in consumer electronics and home appliances. It offers both online and offline shopping experiences and is known for its wide product selection and customer service.'
        }
    ];

    return (
        <div className='CardDiv h-screen w-full bg-zinc-200 flex items-center justify-center'>


            {data.map((elem, index) => (
                <div key={index} className="div p-4 bg-red-300" >

                    <div className="card h-fit w-fit bg-white rounded-md">

                        <div className='h-32 w-48 bg-white rounded-md'>
                            <img src={elem.img} alt={elem.title} className='object-cover h-full w-full rounded-md' />
                        </div>

                        <div className="text-lg font-semibold p-2 text-wrap w-48">
                            <h1>{elem.title}</h1>
                        </div>

                        <div className="w-48 h-full text-wrap text-xs p-2 mb-4">
                            <p className='line-clamp-4'>{elem.desc}</p>
                        </div>


                        <div className="button">
                            <button className='text-xs w-full rounded-lg bg-green-300 text-center font-bold p-2 mb-2'>Visit Store</button>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    );
}

export default Card;
