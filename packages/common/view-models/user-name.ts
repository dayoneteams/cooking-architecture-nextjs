export function getDisplayName(obj: { firstName: string, lastName: string, country: string }): string {
  if (obj.country === 'VN') {
    return `${obj.lastName} ${obj.firstName}`;
  } else if (obj.country === 'US') {
    return `${obj.firstName} ${obj.lastName}`;
  } else {
    return `${obj.firstName} ${obj.lastName}`;
  }
}
