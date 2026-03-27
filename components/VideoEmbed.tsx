export default function VideoEmbed({
    url,
    title,
}: {
    url: string;
    title?: string;
}) {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="aspect-video">
                <iframe
                    src={url}
                    title={title || "Video"}
                    className="w-full h-full"
                    allowFullScreen
                />
            </div>
        </div>
    );
}