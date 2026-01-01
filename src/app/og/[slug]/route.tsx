import { ImageResponse } from "@vercel/og";
import { samplePost } from "@/data/samplePost";

export const runtime = "edge";

export async function GET() {
  const post = samplePost;

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        background: "#141311",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        color: "#EEECE5",
      }}
    >
      <div style={{ fontSize: 28, letterSpacing: "0.2em", color: "#D2603C" }}>
        ENGINEERING
      </div>

      <div style={{ fontSize: 88, fontFamily: "serif", lineHeight: 1 }}>
        {post.title.main}
      </div>

      <div
        style={{
          fontSize: 88,
          fontFamily: "serif",
          fontStyle: "italic",
          color: "#D2603C",
          lineHeight: 1,
        }}
      >
        {post.title.accent}
      </div>

      <div style={{ fontSize: 32, opacity: 0.7, marginTop: 32 }}>
        {post.subtitle}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
