let isActive: boolean;

isActive = true;

function mapStatus(status: boolean) {
  if (status) {
    return "User is active";
  } else {
    return "User away";
  }
}

mapStatus(true);
