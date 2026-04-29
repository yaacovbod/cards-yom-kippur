import '../styles/stamp.css';

type StampCardProps = {
  imageSrc?: string;
  imageCredit?: string;
  imagePosition?: string;
  children?: React.ReactNode;
  flipped?: boolean;
};

export function StampCard({ imageSrc, imageCredit, imagePosition, children, flipped = false }: StampCardProps) {
  return (
    <div className={`stamp-scene ${flipped ? 'flipped' : ''}`}>
      <div className="stamp-card">
        <div className="stamp-front stamp-body">
          {imageSrc && (
            <div className="stamp-image-wrap">
              <img src={imageSrc} alt="תמונת שאלה" className="stamp-image" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
              {imageCredit && <p className="stamp-credit">{imageCredit}</p>}
            </div>
          )}
        </div>
        <div className="stamp-back stamp-body">{children}</div>
      </div>
    </div>
  );
}
