import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Article/article.css';
const video1 = "https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/featurep.png?raw=true";
const video2 = 'https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/icon1.png?raw=true'
const video3 ='https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/icon3.png?raw=true'
const video4 ='https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/icon2.png?raw=true'
const video5 ='https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/icon4.png?raw=true'
const video6 ='https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/icon2.png?raw=true'
const video7 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c4.png?raw=true"
const video8 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c5.png?raw=true"
const video9 ="https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c4.png?raw=true"
const video10 = "https://github.com/priyankadora20/Kindmeal_clone_website/blob/master/src/Components/Homepageimage/c1.png?raw=true"





export default function VideoDisplaypage () {

  const nav =useNavigate() 

  return (
    <>
    <div>
        <div className='article__page'>
            <div className='article__page_created artiti'>
            <div className='article__page_created_article'>

            <h1 id='headhead_article'>Yummy News, Articles & Videos</h1>
            <p className='passpass_article'>Want to keep updated on the latest news of delicious meat-free meals and adorable animals? Check out this section for interesting daily happenings and articles that will melt your tummy (and heart too).</p>
            <br/>
            <p className='passpass_article'>You can also follow our Facebook Page or Twitter for more news and updates.</p>
            
            </div>
            </div>
        </div>

        <div className='videogridsa'>

          <div className='article__page_created  newnewvideo'>

            <div>
              <video width="750" height="500"  >
              <source src={video1} />
              </video>
            </div>
            <div className='nonologo'>

            <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

            </div>
            
            <div>
              <h1 className='p_article p_a'>A Delicious KindMoment</h1>
              <p className='p_ppp'>Food is any substance consumed to provide nutritional support for an organism.</p>
              <button className='butn_article'
               onClick={()=>{nav("/Article")}}> Back To Article</button>
            </div>

          </div>
            <div className='article__page_created  newnewvideo'>

            <div>
              <video width="750" height="500"  >
              <source src={video2} />
              </video>
            </div>
            <div className='nonologo'>

            <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

            </div>
            
            <div>
              <h1 className='p_article p_a'>Girl eating salad in her kitchen dining room</h1>
              <p className='p_ppp'>Young woman eating salad in the dining room of her kitchen, with the stove behind and a glass of water, a plate with a sandwich and a tray with fruit..</p>
              <button className='butn_article'
               onClick={()=>{nav("/Article")}}
              > Back To Article</button>
            </div>

          </div>

          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video3} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Fresh sliced fruit placed on a table</h1>
            <p className='p_ppp'>Fresh sliced fruit placed on a wooden board on a table, grapes, oranges, peaches, bananas, pineapple, watermelon, and others, as you scoop it up and down.</p>
            <button className='butn_article'onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>
          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video4} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Coffee powder being poured on the coffee maker filter</h1>
            <p className='p_ppp'>Coffee powder being poured into the filter of the coffee machine, seen slowly.</p>
            <button className='butn_article'
             onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>
          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video5} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Coffee beans falling on a layer of more beans</h1>
            <p className='p_ppp'>Many coffee beans while others fall quickly, viewed in detail and with ideal lighting.</p>
            <button className='butn_article'
             onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>

          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video6} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Frying diced bacon in a skillet</h1>
            <p className='p_ppp'>Close-up shot of a stove while a person frying diced bacon in a skillet.</p>
            <button className='butn_article'
             onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>
          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video7} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Chef skillfully chopping garlic</h1>
            <p className='p_ppp'>Close up of a cook's hands as he skillfully chops garlic on a board.</p>
            <button className='butn_article'
             onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>
          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video8} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Breakfast at a table with bread, coffee and fruit</h1>
            <p className='p_ppp'>Breakfast served on a wooden table, with bread, coffee and fruit, while pouring cream on the espresso.</p>
            <button className='butn_article'onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>

          <div className='article__page_created  newnewvideo'>

          <div>
          <video width="750" height="500"  >
          <source src={video9} />
          </video>
          </div>
          <div className='nonologo'>

          <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

         </div>

          <div>
            <h1 className='p_article p_a'>Baker preparing flour for dough or pizza</h1>
            <p className='p_ppp'>Baker preparing the flour for dough, forming a volcano with it, to mix the different ingredients.</p>
            <button className='butn_article' onClick={()=>{nav("/Article")}}> Back To Article
            </button>
          </div>

          </div>
          <div className='article__page_created  newnewvideo'>

            <div>
            <video width="750" height="500"  >
            <source src={video10} />
            </video>
            </div>
            <div className='nonologo'>

            <img src="https://cdn.pixabay.com/photo/2018/06/22/19/03/logo-3491390_1280.png" alt="" className='logologo'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt="" className='logologo' />

            </div>

            <div>
            <h1 className='p_article p_a'>Waiter serving meat stew in a restaurant</h1>
            <p className='p_ppp'>Waiter serving pieces of meat on a plate in a restaurant bar, with many people sitting.</p>
            <button className='butn_article'onClick={()=>{nav("/Article")}}> Back To Article
            </button>
            </div>

            </div>


        </div>


     </div>
    </>
   
  )
}