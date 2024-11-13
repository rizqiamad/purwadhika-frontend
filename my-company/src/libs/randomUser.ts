import { IRandomUser } from "@/types/types"

export async function getDataRandomUser() {
  try {
    const res = await fetch('https://randomuser.me/api/?results=10', { cache: 'no-cache' })
    const { results } :{ results: IRandomUser[] } = await res.json()
    return results
  } catch (err) {
    console.log(err)
  }
}