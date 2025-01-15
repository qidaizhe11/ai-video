import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Textarea } from "@/components/ui/textarea"

export default function CreateVideo() {
  return (
    <div className="container flex h-screen w-full">
      <div className="w-[450px]">
        <Tabs defaultValue="text" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="text">文生视频</TabsTrigger>
            <TabsTrigger value="image">图生视频</TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <Card>
              <CardHeader>
                <CardTitle>创意描述</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea placeholder="请输入要生成的内容" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>参数设置</CardTitle>
              </CardHeader>
              <CardContent>
                
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="image">{/* <ImageEditor /> */}</TabsContent>
        </Tabs>
      </div>
      <div className="flex-1"></div>
      <div className="w-[200px]"></div>
    </div>
  )
}
