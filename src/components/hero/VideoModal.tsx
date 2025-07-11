
import { Button } from '@/components/ui/button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 rounded-2xl p-6 max-w-4xl w-full border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
          <p className="text-slate-300 text-lg">Course Preview Video</p>
        </div>
        <Button 
          variant="ghost" 
          className="mt-4 text-slate-300 hover:text-white"
          onClick={onClose}
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default VideoModal;
