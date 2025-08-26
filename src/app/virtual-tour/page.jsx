// app/virtual-tour/page.js
export default function VirtualTourPage() {
  return (
    <div className="w-full h-screen">
      <iframe
        src="/virtual-tour/index.html"
        className="w-full h-full border-0"
        title="Virtual Tour"
      />
    </div>
  );
}