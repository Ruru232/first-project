import { Button } from '@/components/ui/button';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiMessengerLogo } from 'react-icons/pi';

export default function footerIcons() {
  // React-icons
  const fb = <FaFacebookF className="h-5 w-5" />;
  const x = <FaXTwitter className="h-5 w-5" />;
  const msger = <PiMessengerLogo className="h-5 w-5" />;

  // Icon Array
  const buttons = [{ icon: fb }, { icon: x }, { icon: msger }];
  return buttons.map((btn) => (
    <Button variant="ghost" size="icon">
      {btn.icon}
    </Button>
  ));
}
