import { FaRegEnvelope, FaRegBookmark } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function headerIcons() {
  // React-icon
  const envelope = <FaRegEnvelope className="h-5 w-5" />;
  const bookmark = <FaRegBookmark className="h-5 w-5" />;

  // Icon Array
  const buttons = [{ icon: envelope }, { icon: bookmark }];
  return buttons.map((btn) => (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full border-2 border-black w-8 h-8 mt-14 ml-1"
    >
      {btn.icon}
    </Button>
  ));
}
