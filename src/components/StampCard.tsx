import '../styles/stamp.css';

type StampCardProps = {
  imageSrc?: string;
  imageCredit?: string;
  children?: React.ReactNode;
  flipped?: boolean;
};

export function StampCard({ imageSrc, imageCredit, children, flipped = false }: StampCardProps) {
  return (
    <div className={`stamp-scene ${flipped ? 'flipped' : ''}`}>
      <div className="stamp-card">
        <div className="stamp-front stamp-body">
          {imageSrc && (
            <div className="stamp-image-wrap">
              <img src={imageSrc} alt="תמונת שאלה" className="stamp-image" />
              {imageCredit && <p className="stamp-credit">{imageCredit}</p>}
            </div>
          )}
        </div>
        <div className="stamp-back stamp-body">{children}</div>
      </div>
    </div>
  );
}
