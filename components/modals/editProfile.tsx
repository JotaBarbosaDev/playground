import { AvatarProfilePhoto } from "@/components/base/avatar/avatar-profile-photo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  Mail,
  Pencil,
  Save,
  Trash2,
  X,
} from "lucide-react";

const profileStats = [
  { label: "Followers", value: "32,086" },
  { label: "Following", value: "4,698" },
  { label: "Posts", value: "128" },
  { label: "Collections", value: "24" },
];

function ProfileRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-4 border-t border-dotted border-border/70 py-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-8">
      <div className="pt-1">
        <p className="text-base font-medium text-foreground/85 lg:text-lg">{label}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function ModalEditProfile() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Editar perfil</Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-h-[92vh] overflow-hidden border-border/60 p-0 sm:max-w-6xl"
      >
        <DialogTitle className="sr-only">Edit profile</DialogTitle>
        <DialogDescription className="sr-only">
          Update public profile information and account details.
        </DialogDescription>

        <form className="max-h-[92vh] overflow-y-auto">
          <div className="relative">
            <div className="h-40 rounded-t-lg bg-linear-to-tr from-amber-100 via-violet-100 to-rose-100 sm:h-48">
              <div className="h-full w-full bg-[radial-gradient(circle_at_20%_75%,rgba(196,181,253,0.75),transparent_50%),radial-gradient(circle_at_45%_60%,rgba(233,213,255,0.9),transparent_45%),radial-gradient(circle_at_75%_65%,rgba(216,180,254,0.55),transparent_42%),radial-gradient(circle_at_85%_15%,rgba(254,240,138,0.45),transparent_45%)]" />
            </div>

            <DialogClose asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 rounded-full bg-white/35 text-white backdrop-blur hover:bg-white/50 hover:text-white"
              >
                <X className="size-5" />
                <span className="sr-only">Close</span>
              </Button>
            </DialogClose>

            <div className="absolute top-full left-6 z-10 -translate-y-1/2">
              <AvatarProfilePhoto
                verified
                size="lg"
                alt="Sienna Hewitt"
                src="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80"
              />
            </div>
          </div>

          <div className="px-6 pt-24 pb-8 sm:px-8">
            <div className="flex flex-col gap-6 border-b border-dotted border-border/70 pb-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                    Sienna Hewitt
                  </h2>
                  <BadgeCheck className="size-6 fill-blue-500 text-white" />
                </div>
                <p className="mt-2 text-xl text-muted-foreground">
                  @siennahewitt
                </p>
              </div>

              <div className="flex w-full flex-col gap-5 lg:w-auto lg:items-end">
                <div className="flex items-center justify-end gap-2">
                  <Button type="button" variant="ghost" size="icon-sm" className="text-muted-foreground">
                    <Trash2 className="size-4" />
                    <span className="sr-only">Delete cover</span>
                  </Button>
                  <Button type="button" variant="ghost" size="icon-sm" className="text-muted-foreground">
                    <Pencil className="size-4" />
                    <span className="sr-only">Edit profile</span>
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:gap-x-0">
                  {profileStats.map((item, index) => (
                    <div
                      key={item.label}
                      className={[
                        "min-w-0",
                        "sm:px-6 lg:text-left",
                        index > 0 ? "sm:border-l sm:border-border" : "",
                      ].join(" ")}
                    >
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <ProfileRow label="Name">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    aria-label="First name"
                    defaultValue="Sienna"
                    className="h-14 rounded-xl px-5 text-xl"
                  />
                  <Input
                    aria-label="Last name"
                    defaultValue="Hewitt"
                    className="h-14 rounded-xl px-5 text-xl"
                  />
                </div>
              </ProfileRow>

              <ProfileRow label="Email">
                <div className="space-y-3">
                  <div className="relative">
                    <Mail className="pointer-events-none absolute top-1/2 left-4 size-6 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      aria-label="Email"
                      type="email"
                      defaultValue="hi@siennahewitt.com"
                      className="h-14 rounded-xl pr-5 pl-14 text-xl"
                    />
                  </div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-blue-600">
                    <BadgeCheck className="size-5 fill-blue-600 text-white" />
                    <span>Verified 2 Jan, 2025</span>
                  </div>
                </div>
              </ProfileRow>

              <ProfileRow label="Username">
                <div className="flex h-14 overflow-hidden rounded-xl border border-input bg-background">
                  <div className="flex items-center border-r border-input px-4 text-xl text-muted-foreground">
                    untitledui.com/@
                  </div>
                  <div className="flex min-w-0 flex-1 items-center justify-between px-4">
                    <span className="truncate text-xl font-medium">
                      siennahewitt
                    </span>
                    <CheckCircle2 className="ml-4 size-6 text-emerald-600" />
                  </div>
                </div>
              </ProfileRow>

              <ProfileRow label="Country">
                <div className="space-y-3">
                  <button
                    type="button"
                    className="flex h-14 w-full items-center justify-between rounded-xl border border-input bg-background px-4 text-left shadow-xs transition-colors hover:bg-accent/40"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                        AU
                      </div>
                      <div className="min-w-0 text-xl">
                        <span className="font-semibold">Australia</span>
                        <span className="ml-2 text-muted-foreground">
                          UTC/GMT +10
                        </span>
                      </div>
                    </div>
                    <ChevronDown className="size-5 text-muted-foreground" />
                  </button>
                  <p className="text-base text-muted-foreground">
                    Estimates based on recent IP address.
                  </p>
                </div>
              </ProfileRow>
            </div>

            <div className="mt-8 grid gap-4 border-t border-dotted border-border/70 pt-8 sm:grid-cols-2">
              <Button
                type="button"
                variant="outline"
                className="h-14 rounded-xl text-lg"
              >
                <Save className="size-5" />
                Save as draft
              </Button>
              <Button type="submit" className="h-14 rounded-xl text-lg">
                Publish changes
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
