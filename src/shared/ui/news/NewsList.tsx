import { NewsData } from './NewsData'

export default function NewsList() {
  return (
    <ul className="flex flex-col">
      {NewsData.map((data, index) => (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <li className="py-[30px] border-t hover:text-[#0058a7] flex w-full justify-between">
            <h2>{data.title}</h2>
            <p>{data.createdAt}</p>
          </li>
        </a>
      ))}
    </ul>
  )
}
