export default function UserDetailPage({ params }: { params: { userId: string } }) {
  return (
    <div>
      User Id : {params.userId}
    </div>
  )
}