import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import UserList from "../userList"

const ChatTabs = () => {
  return (
    <Tabs defaultValue='users'>
      <div className='shadow-md bg-slate-800 p-3 rounded-l-lg'>
        <TabsList className='flex justify-center items-center rounded-none'>
          <TabsTrigger value='users' className='border-r-2 w-full'>
            Users
          </TabsTrigger>
          <TabsTrigger value='groups' className=' w-full'>
            Groups
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value='users'>
        <UserList />
      </TabsContent>
      <TabsContent value='groups'>
        <h3>Groups</h3>
      </TabsContent>
    </Tabs>
  )
}

export default ChatTabs
