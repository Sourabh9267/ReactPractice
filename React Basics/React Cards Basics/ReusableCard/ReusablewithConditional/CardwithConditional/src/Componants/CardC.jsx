import React from 'react'

function CardC() {

    const data = [
        {
            img: 'https://png.pngtree.com/thumb_back/fh260/background/20220614/pngtree-blackbackgrounded-amazon-prime-or-shipping-box-market-fast-parcel-photo-image_36793638.jpg',
            title: 'Amazon Basics',
            desc: 'A global e-commerce giant, Amazon offers a vast range of products including electronics, apparel, books, and more, alongside services like Amazon Prime, which includes fast shipping and streaming entertainment.',
            isOut: false,
            stocks:15000,
        
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOvzpHSH0HJy-yJzJsQzqGwzjlsqs0aYcqg&s',
            title: 'Flipkart Megastore',
            desc: 'One of India’s largest e-commerce platforms, Flipkart offers products ranging from electronics to fashion and groceries. It\'s known for its frequent sales events and wide delivery network across India.',
            isOut: false,
            stocks:120000,
        },
        {
            img: 'https://etimg.etb2bimg.com/photo/54429313.cms',
            title: 'Snapdeal.com',
            desc: 'Snapdeal is an Indian online marketplace that focuses on providing affordable products across various categories, such as home essentials, fashion, and electronics, catering primarily to budget-conscious consumers.',
            isOut: true,
            stocks:1300,
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRt-_q9V9PlF0BxlxSVj09OT7H41z1FjPB2A&s',
            title: 'Tata CliQ',
            desc: 'Tata CliQ is an omnichannel e-commerce platform offering products in fashion, electronics, and luxury items, combining both online shopping and in-store experiences backed by the Tata brand\'s trust.',
            isOut: false,
            stocks:20000,
        },
        {
            img: 'https://i.pinimg.com/originals/bb/db/38/bbdb38ad5947cf5189b8d4b685a93499.png',
            title: 'Croma- A Tata Enterprise',
            desc: 'Croma is a leading Indian retailer specializing in consumer electronics and home appliances. It offers both online and offline shopping experiences and is known for its wide product selection and customer service.',
            isOut: true,
            stocks:1000,
        }
    ];



  return (

    <>
    { data.map((elem,idx)=>(

        <div className='h-fit w-fit bg-white rounded-md m-2' >

            <div className="img h-32 w-48 bg-zinc-400 rounded-md">


                <img src={elem.img} alt="" className='h-full w-full rounded-md' />

            </div>

            <div className="heading text-lg font-semibold mt-2 mb-2 px-1 w-40 text-wrap">

                <h3>{elem.title}</h3>

            </div>

            <div className="heading text-xs  mt-2 mb-2 px-2 w-40">

            <p>{elem.desc}</p>

            </div>

            <div className="stocks">

                <h5 className={`text-xs font-semibold ${elem.stocks>10000 ? "text-green-600":"text-red-400"} `}>Current Stocks: {elem.stocks}</h5>
            </div>
            <button className={`button h-10 w-full ${!elem.isOut ? "bg-green-300 " : "bg-red-400"} rounded-md mt-2 mb-2 font-bold text-green-950`}>Order Services</button>


        </div>



    ))}


    {/* <div className='h-fit w-fit bg-white rounded-md' >

            <div className="img h-32 w-48 bg-zinc-400 rounded-md">

            
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20220614/pngtree-blackbackgrounded-amazon-prime-or-shipping-box-market-fast-parcel-photo-image_36793638.jpg" alt="" className='h-full w-full rounded-md' />

            </div>
            
            <div className="heading text-lg font-semibold mt-2 mb-2 px-1">

                <h3>AMAZON BASICS</h3>

            </div>

            <div className="heading text-xs  mt-2 mb-2 px-2 w-40">

             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui blanditiis sunt ex non! Temporibus magnam ullam perspiciatis dolores similique nam!</p>

            </div>

            <button className='button h-10 w-full bg-green-300 rounded-md mt-2 mb-2 font-bold text-green-950'>Order Services</button>


    </div>
     */}
    </>
  )
}

export default CardC