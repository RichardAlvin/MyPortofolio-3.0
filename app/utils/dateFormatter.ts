export const formatDate = (dateString: string): string => {
    if (!dateString) return "Permanent";
  
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
};