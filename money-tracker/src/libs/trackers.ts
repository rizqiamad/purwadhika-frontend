import { ITracker } from "@/types/tracker"

export const getData = async (): Promise<{ trackers: ITracker[] }> => {
  try {
    const res = await fetch('http://localhost:8000/api/trackers', {
      next: {revalidate: 0}
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.log(err)
    return { trackers: [] };
  }
}