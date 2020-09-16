function parse_date(datestring) {
    try{
        var date = new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "CET",
            timeZoneName: "short"
        }).format(Date.parse(datestring));
    }
    catch(err){
        var date = "Unknown";
    }
    return date;
}

export default parse_date