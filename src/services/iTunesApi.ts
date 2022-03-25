import { ItunesTypes } from "@/types/ItunesTypes.Interface"

export const iTunesFetchSearchData = async (search: string | number): Promise<ItunesTypes> =>
  await fetch(`https://itunes.apple.com/search?term=${search}&entity=album`).then((res) =>
    res.json()
  )