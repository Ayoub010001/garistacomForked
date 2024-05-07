import { axiosInstance } from "../../axiosInstance";

export const editCompany = async ({
    id,
    description,
    address,
    currency,
    website_url,
    facebook,
    instgram,
    tiktok,
    youtube,
    snapshat,
    whatsapp,
    google_buss,
    trustpilot_link,
    wifi_pass,
    cover_image,
    facebook_pixel,
    tiktok_pixel,
    ads_pixel,
    anylytics
}) => {
    try{

        const res = await axiosInstance.put('/api/infos/'+id, {
            description: description,
            address: address,
            currency: currency,
            website_url: website_url,
            facebook: facebook,
            instgram: instgram,
            tiktok: tiktok,
            youtube: youtube,
            snapshat: snapshat,
            whatsapp: whatsapp,
            google_buss: google_buss,
            trustpilot_link: trustpilot_link,
            wifi_pass: wifi_pass,
            cover_image: cover_image,
            facebook_pixel: facebook_pixel,
            tiktok_pixel: tiktok_pixel,
            ads_pixel: ads_pixel,
            anylytics: anylytics,
        })
        if(res)
        {
            console.log('the updated success => ',res);
        }
        return res.data;
    }
    catch(err)
    {
        console.log("The Error => ",err );
    }
}