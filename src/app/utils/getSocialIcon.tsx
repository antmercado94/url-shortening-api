import Facebook from "@/app/ui/icons/Facebook";
import Twitter from "@/app/ui/icons/Twitter";
import Pinterest from "@/app/ui/icons/Pinterest";
import Instagram from "@/app/ui/icons/Instagram";

/**
 * Get social media svg component
 */
function getSocialIcon(name: string) {
  switch (name) {
    case "facebook":
      return (
        <Facebook
          className="group-hover:fill-primary-cyan"
          aria-hidden="true"
        />
      );
    case "twitter":
      return (
        <Twitter className="group-hover:fill-primary-cyan" aria-hidden="true" />
      );
    case "pinterest":
      return (
        <Pinterest
          className="group-hover:fill-primary-cyan"
          aria-hidden="true"
        />
      );
    case "instagram":
      return (
        <Instagram
          className="group-hover:fill-primary-cyan"
          aria-hidden="true"
        />
      );
  }
}

export default getSocialIcon;
