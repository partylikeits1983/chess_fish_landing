export default function Footer() {
  return (
    <div className="absolute w-full py-5 text-center">
      <img src="arbLogo1.png" alt="Arbitrum Logo" style={{ height: '150px', width: 'auto' }} className="mx-auto mt-2" />

      <p className="text-white mt-2">
        Backed by Arbitrum
      </p>

      <p className="text-white mt-8"> {/* Added margin-top for spacing */}
        Join the Community on{" "}
        <a
          className="font-medium text-cyan-400 underline transition-colors"
          href="https://t.me/chessfish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </p>
    </div>
  );
}
