export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const timeDifference = now - date;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `Há ${years} ano${years > 1 ? "s" : ""}`;
  if (months > 0) return `Há ${months} m${months > 1 ? "ês" : "eses"}`;
  if (days > 0) return `Há ${days} dia${days > 1 ? "s" : ""}`;
  if (hours > 0) return `Há ${hours} hora${hours > 1 ? "s" : ""}`;
  if (minutes > 0) return `Há ${minutes} minuto${minutes > 1 ? "s" : ""}`;

  return "Agora mesmo";
}
