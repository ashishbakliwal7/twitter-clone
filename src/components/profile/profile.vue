<template>
  
<div id = "profile" class="p-relative h-screen">
        <div class="flex justify-center">

            <header class="black h-12 py-4 h-auto">
                <!-- Navbar (left side) -->
                <div style="width: 275px;">
    <div class="overflow-y-auto fixed h-screen pr-3" style="width: 275px;">
        <!--Logo-->
        <i class='fab fa-twitter' style='font-size:48px;color:#1DA1F2'></i>

        <!-- Nav-->
        <nav class="mt-5 px-2">
            <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-lightblue hover:text-blue">
                <svg class="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"></path>
                </svg>
                Home
            </a>
            <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-lightblue hover:text-blue">
                <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                </svg>

                Explore
            </a>
        
        </nav>


        <!-- User Menu -->
   
    </div>
</div>
            </header>

            <main role="main">
                <div class="flex" style="width: 990px;">
                    <section class="w-3/5 border border-y-0" style="max-width:600px;">
                        <!--Content (Center)-->
                            <!-- Nav back-->
<div>
    <div class="flex justify-start">
        <div class="px-4 py-2 mx-2">
            <a href="" class=" text-2xl font-medium rounded-full text-blue-400 hover:bg-lightblue hover:text-blue float-right">
                <svg class="m-2 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <g>
                        <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z">
                        </path>
                    </g>
                </svg>
            </a>
        </div>
        <div class="mx-2">
            <h2 class="mb-0 text-xl font-bold black">Ashish bakliwal</h2>
            <p class="mb-0 w-48 text-xs text-gray-400">9,416 Tweets</p>
        </div>
    </div>

    <hr>
</div>

<!-- User card-->
<div>
    <div class="w-full bg-cover bg-no-repeat bg-center" style="height: 200px; background-image: url(https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200);">
        <img class="opacity-0 w-full h-full" src="https://pbs.twimg.com/profile_banners/2161323234/1585151401/600x200" alt="">
    </div>
    <div class="p-4">
        <div class="relative flex w-full">
            <!-- Avatar -->
            <div class="flex flex-1">
                <div style="margin-top: -6rem;">
                    <div style="height:9rem; width:9rem;" class="md rounded-full relative avatar">
                        <img style="height:9rem; width:9rem;" class="md rounded-full relative border-4 border-gray-900" src="https://pbs.twimg.com/profile_images/1227136288848924672/lvIDzw4z_400x400.jpg" alt="">
                        <div class="absolute"></div>
                    </div>
                </div>
            </div>
            <!-- Follow Button -->
            <div class="flex flex-col text-right">
                <button class="flex justify-center  max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded max-w-max border bg-transparent border-blue-500 text-blue-500 hover:border-blue-800 hover:border-blue-800 flex items-center hover:shadow-lg font-bold py-2 px-4 rounded-full mr-0 ml-auto">
                    Edit Profile
                </button>
            </div>
        </div>

        <!-- Profile info -->
        <div class="space-y-1 justify-center w-full mt-3 ml-3">
            <!-- User basic-->
            <div>
                <h2 class="text-xl leading-6 font-bold black">Ashish Bakliwal</h2>
                <p class="text-sm leading-5 font-medium text-gray-600">@ashihbakliwal8</p>
            </div>
            <!-- Description and others -->
            <div class="mt-3">
                <p class="black leading-tight mb-2">Software Engineer / Designer / Entrepreneur <br>Visit my website to test a working <b>Twitter Clone.</b> </p>
                <div class="text-gray-600 flex">
                   <span class="flex mr-2"><svg viewBox="0 0 24 24" class="h-5 w-5 paint-icon"><g>
                     <path d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"></path><circle cx="7.032" cy="8.75" r="1.285"></circle><circle cx="7.032" cy="13.156" r="1.285"></circle><circle cx="16.968" cy="8.75" r="1.285"></circle><circle cx="16.968" cy="13.156" r="1.285"></circle><circle cx="12" cy="8.75" r="1.285"></circle><circle cx="12" cy="13.156" r="1.285"></circle><circle cx="7.032" cy="17.486" r="1.285"></circle><circle cx="12" cy="17.486" r="1.285"></circle></g></svg> <span class="leading-5 ml-1">Joined December, 2019</span></span>
                </div>
            </div>
            <div class="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                <div class="text-center pr-3"><span class="font-bold black">520</span><span class="text-gray-600"> Following</span></div>
                <div class="text-center px-3"><span class="font-bold black">23,4m </span><span class="text-gray-600"> Followers</span></div>
            </div>
        </div>
    </div>
    <hr>
</div>

    <ul class="list-none">
            
                    <li>
                    <!--second tweet-->
<article class="hover:transition duration-350 ease-in-out">
    <div class="flex flex-shrink-0 p-4 pb-0">
        <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
                <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1227136288848924672/lvIDzw4z_400x400.jpg" alt="">
                </div>
                <div class="ml-3">
                    <p class="text-base leading-6 font-medium black">
                        Ashish Bakliwal
                        <span class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            ashishbakliwal8  . 16 April
                        </span>
                    </p>
                </div>
            </div>
        </a>
    </div>


    <div class="pl-16">
        <p class="text-base width-auto font-medium black flex-shrink">
            I was wondering what I can do with <a href="#" class="text-blue-400">#tailwindcss</a>, so just started building
            Twitter UI using Tailwind and so far it looks so promising. 
            <a href="#" class="text-blue-400"> #firsttweet</a>
        </p>



        <div class="flex items-center py-4">
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <i class="far fa-comment mr-3"></i>
              12.3 k
            </div>
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
            <i class="fas fa-retweet mr-3"></i>
              14 k
            </div>
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
            <i class="fas fa-heart mr-3"></i>
              14 k
            </div>
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
          <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>

    </div>
    <hr>
</article>
            </li>
            <li>
                    <!--second tweet-->
<article class="hover:transition duration-350 ease-in-out">
    <div class="flex flex-shrink-0 p-4 pb-0">
        <a href="#" class="flex-shrink-0 group block">
            <div class="flex items-center">
                <div>
                    <img class="inline-block h-10 w-10 rounded-full" src="https://pbs.twimg.com/profile_images/1227136288848924672/lvIDzw4z_400x400.jpg" alt="">
                </div>
                <div class="ml-3">
                    <p class="text-base leading-6 font-medium black">
                        Ashish Bakliwal
                        <span class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                            ashishbakliwal8  . 16 April
                        </span>
                    </p>
                </div>
            </div>
        </a>
    </div>


    <div class="pl-16">
        <p class="text-base width-auto font-medium black flex-shrink">
            I was wondering what I can do with <a href="#" class="text-blue-400">#tailwindcss</a>, so just started building
            Twitter UI using Tailwind and so far it looks so promising. 
            <a href="#" class="text-blue-400"> #firsttweet</a>
        </p>



        <div class="flex items-center py-4">
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
              <i class="far fa-comment mr-3"></i>
              12.3 k
            </div>
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
            <i class="fas fa-retweet mr-3"></i>
              14 k
            </div>
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
            <i class="fas fa-heart mr-3"></i>
              14 k
            </div>
            <div class="flex-1 flex items-center black text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
          <i class="fas fa-share-square mr-3"></i>
            </div>
          </div>

    </div>
    <hr>
</article>
            </li>
 
            </ul>
                    </section>


                   
                </div>
            </main>

        </div>

    </div>

</template>





    <style>
    .overflow-y-auto::-webkit-scrollbar, .overflow-y-scroll::-webkit-scrollbar, .overflow-x-auto::-webkit-scrollbar, .overflow-x::-webkit-scrollbar, .overflow-x-scroll::-webkit-scrollbar, .overflow-y::-webkit-scrollbar, body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.overflow-y-auto, .overflow-y-scroll, .overflow-x-auto, .overflow-x, .overflow-x-scroll, .overflow-y, body {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.bg-dim-700 {
  --bg-opacity: 1;
}

html, body {
  margin: 0;
}

svg.paint-icon {
  fill: currentcolor;
}

        </style>

        <script>
export default {
  name: 'profile',
}
</script>