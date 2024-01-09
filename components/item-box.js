/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lIEOp8KY5kJ
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ItemsCom({ item }) {
  const { title, content,  imageUrl } = item;
  return (
    <div className="bg-white">
      <div className="p-4">
        <div className="mt-4 space-y-4">
          <Card className="bg-[#f8f8f8]">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>₹125 | 40% OFF USE MISSEDYOU</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-1">
                  <StarIcon className="text-yellow-400" />
                  <span>4.7 (31)</span>
                </div>
                <p>{content}</p>
              </div>
              <Image
                alt="Bursting Strawberry"
                className="h-24 w-36 rounded-md"
                height="100"
                src={imageUrl}
                style={{
                  aspectRatio: "160/100",
                  objectFit: "cover",
                }}
                width="160"
              />
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Add</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
