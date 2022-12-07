import { EMAIL, EMAIL_TO } from "../config";

export const makerMail = (subject: string = '', text:string = '', html:string = '')  => {
 return {
    from: EMAIL, // sender address (who sends)
    to: EMAIL_TO, // list of receivers (who receives),
    subject,
    text,
    html
}
};
