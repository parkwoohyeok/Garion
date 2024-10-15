import NewsHeader from '@shared/ui/news/NewsHeader'
import NewsList from '@shared/ui/news/NewsList'

export default function News() {
  return (
    <section className="flex flex-col h-full ">
      <div className="text-[42px] px-[400px] py-[10px]">
        <h2>관련뉴스</h2>
      </div>
      <div className="border-t mt-[30px]">
        <div className="flex flex-col w-full px-[400px]">
          <NewsHeader />
          <NewsList />
        </div>
      </div>
    </section>
  )
}
