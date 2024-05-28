import React from 'react'
import PagePadding from '@/components/PagePadding'
import Category from './components/Category'
import PlayListCard from '@/components/PlayListCard';
import { getRandomElementFromArray } from '@/lib/utils';
import { dummyPlaylistArray } from '@/lib/dummyData';

const page = () => {
  return (
    <div>
      <PagePadding>
        <div className='mt-9'></div>
        <Category></Category>
        <div className='mt-12'></div>
        <section className='grid gird-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
          <PlayListCard playlist={getRandomElementFromArray(dummyPlaylistArray)}/>
        </section>
        <div className='mt-12'></div>
      </PagePadding>
    </div>
  )
}

export default page
