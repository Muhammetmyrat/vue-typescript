import {ItunesTypes} from '@/types/ItunesTypes.Interface'

export const iTunesFetchSearchData = async (search: string): Promise<ItunesTypes> => 
	await fecth(
		`https://itunes.apple.com/search?term=${search}&entity=album`
		).then(res => res.json())