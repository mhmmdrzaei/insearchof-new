import '../globals.css'
export const metadata = {
  title: 'In Search Of',
  description: 'Casting and management agency based in New York, London and Toronto',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
