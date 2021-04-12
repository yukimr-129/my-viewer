export type searchData = {
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    kind: string;
    snippet: {
        channelId: string;
        channelTitle: string;
        description: string;
        liveBroadcastContent: string;
        publishTime: string;
        publishedAt: string;
    };
    thumbnails: {
        default: {url: string; width: number; height: number;}
        high: {url: string; width: number; height: number;}
        medium: {url: string; width: number; height: number;}
    };
    title: string;
}

export type videoListData = {
etag: string;
id: string;
kind: string;
snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    defaultLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: {
        description: string;
        title: string;
    }
    publishedAt: string;
    tags: Array<string>;
    thumbnails: {
        default: {
            height: number;
            url: string;
            width: number;
        }
        high: {
            height: number;
            url: string;
            width: number;
        }
        maxres: {
            height: number;
            url: string;
            width: number;
        }
        medium: {
            height: number;
            url: string;
            width: number;
        }
        standard: {
            height: number;
            url: string;
            width: number;
        }
    }
    title: string;
}
statistics: {
    commentCount: string;
    dislikeCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
}
length: number;
}