import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { fetchGroups } from "../../../features/groups/groupsSlice"

const GroupList = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchGroups())
  }, [])

  const groups = useAppSelector((state) => state.groups.groups)

  console.log("groups :>> ", groups)

  return (
    <section className='text-white text-xs'>
      {groups.map((group) => (
        <article
          key={group._id}
          className={`px-3 py-2 pb-4 mb-4 border-b border-gray-300 cursor-pointer hover:bg-slate-900 transition-colors duration-300 ease-in-out ${
            false ? "bg-slate-900" : "hover:opacity-70 transition-opacity"
          }`}
          onClick={() => {}}
        >
          <div className='flex items-center gap-x-3'>
            <div className='text-lg bg-slate-700 rounded-full h-12 w-12 flex items-center justify-center'>
              {group.title[0]?.toUpperCase()}
            </div>
            <div>
              <div className='text-base tracking-wider mb-2'>{group.title}</div>
              <p className='text-gray-500 italic text-xs'>
                {group.description.slice(0, 15)}...
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default GroupList
