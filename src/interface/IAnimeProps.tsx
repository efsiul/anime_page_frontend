export interface IAnimeProps {
    mal_id: number;
    type: string;
    score: number;
    images: {
        jpg: {
        large_image_url: string;
        };
    };
    title: string;
}