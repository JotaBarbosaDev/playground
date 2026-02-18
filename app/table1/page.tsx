import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import {Table01DividerLineSm} from "@/components/ui/table1"

export default function Table1() {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"> 
                <Table01DividerLineSm />

              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
