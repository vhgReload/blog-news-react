import { useEffect, useState } from 'react';
import data from '../noti.json'

export const ItenListContainer = () => {
    const [noticias, setNoticias] = useState([]);

    const pedirNoticias = () => {
        return new Promise((resolve, reject) => {
            resolve(data.news);
        });
    };

    useEffect(() => {
        pedirNoticias()
        .then((res) => {
            setNoticias(res);
        });
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {noticias.length > 0 &&
            noticias.map((noticia) => {
                return (
                    <div className='flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden' key={noticia.id}>
                      
                        <div className='lg:w-1/3 w-full'>
                            <img className='w-full h-full object-cover' src={noticia.image} alt={noticia.title} />
                        </div>
                     
                        <div className='p-4 lg:p-8 flex flex-col justify-between lg:w-2/3'>
                            <p className='text-GrayishBlue mb-2 text-xl font-bold'>{noticia.number}</p>
                            <h2 className='font-bold text-lg lg:text-xl mb-3 hover:text-SoftOrange cursor-pointer'>
                                {noticia.title}
                            </h2>
                            <p className='text-GrayishBlue text-sm lg:text-base'>{noticia.text}</p>
                        </div>
                    </div>
                );
            })
        }
    </div>
    
    
    );
};
