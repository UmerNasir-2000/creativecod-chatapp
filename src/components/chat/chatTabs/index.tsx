import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import UserList from "../userList"
import { useState } from "react"
import GroupList from "../groupList"

const ChatTabs = () => {
  const [selectedTab, setSelectedTab] = useState("users")
  return (
    <Tabs
      value={selectedTab}
      defaultValue='users'
      onValueChange={(value: string) => setSelectedTab(value)}
    >
      <div className='shadow-md bg-slate-800 p-3 rounded-l-lg'>
        <TabsList className='flex justify-center items-center rounded-none'>
          <TabsTrigger
            value='users'
            className={`border-r-2 w-full ${
              selectedTab === "users" && `underline underline-offset-8`
            }`}
          >
            Users
          </TabsTrigger>
          <TabsTrigger
            value='groups'
            className={`w-full ${
              selectedTab === "groups" && `underline underline-offset-8`
            }`}
          >
            Groups
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value='users'>
        <UserList />
      </TabsContent>
      <TabsContent value='groups'>
        <GroupList />
      </TabsContent>
    </Tabs>
  )
}

export default ChatTabs
