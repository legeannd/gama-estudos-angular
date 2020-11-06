export interface DragonActionList {
  actions: Array<DragonListInfo>
}

export interface DragonListInfo{
  favorited: boolean
  desc: string;
  name: string;
}
