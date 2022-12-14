var nodemailer = require('nodemailer');
const express = require('express')
require('dotenv').config();
const app = express()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("api working")
})
app.post('/email',(req,res)=>{
    const{email,message}=req.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'saddamkhan.khan705@gmail.com',
          pass: 'fptdoqbsskmhmnnd'
        }
      });
      
      var mailOptions = {
        from: 'saddamkhan.khan705@gmail.com',
        to: email,
        subject: "SD Husain",
        html: `<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <style>
            * {
              box-sizing: border-box;
            }
        
            body {
              margin: 0;
              padding: 0;
            }
        
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
        
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
        
            p {
              line-height: inherit
            }
        
            .desktop_hide,
            .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
            }
        
            @media (max-width:700px) {
              .desktop_hide table.icons-inner {
                display: inline-block !important;
              }
        
              .icons-inner {
                text-align: center;
              }
        
              .icons-inner td {
                margin: 0 auto;
              }
        
              .fullMobileWidth,
              .row-content {
                width: 100% !important;
              }
        
              .mobile_hide {
                display: none;
              }
        
              .stack .column {
                width: 100%;
                display: block;
              }
        
              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }
        
              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }
          </style>
        </head>
        <body style="background-color: #000000; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #91e8e3; background-image: url('images/print_giraffe.png'); background-position: top center; background-repeat: repeat;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center; padding-top: 40px;">
        <table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tbody><tr>
        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="LOGO" class="icon" height="64" src='./images/Logo_wildlife.png' style="display: block; height: auto; margin: 0 auto; border: 0;" width="122"></td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-top:50px;text-align:center;width:100%;">
        <h1 style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 43px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>WILDLIFE CONSERVATION</strong></h1>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="10" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #363333; line-height: 1.8; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;">Ensure the world???s most iconic species, including tigers, rhinos, and elephants, are secured and recovering in the wild</span></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="button_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:30px;text-align:center;">
        <div align="center" class="alignment">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:183px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#0B4E63" fillcolor="#0b4e63"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Georgia, serif; font-size:16px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0b4e63;border-radius:4px;width:auto;border-top:1px solid #0B4E63;font-weight:undefined;border-right:1px solid #0B4E63;border-bottom:1px solid #0B4E63;border-left:1px solid #0B4E63;padding-top:5px;padding-bottom:5px;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>LEARN MORE</strong></span></span></a>
        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="image_block block-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
        <div align="center" class="alignment" style="line-height:10px"><img alt="Jungle" class="fullMobileWidth" src="images/nature_1.jpg" style="display: block; height: auto; border: 0; width: 578px; max-width: 100%;" title="Jungle" width="578"></div>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:45px;line-height:45px;font-size:1px;">&hairsp;</div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #91e8e3; line-height: 1.8; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;">Did You Know?</span></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:40px;padding-top:10px;text-align:center;width:100%;">
        <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 33px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">WILDLIFE UNDER THREAT</h1>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center; padding-top: 25px;">
        <table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tbody><tr>
        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Wild Life" class="icon" height="64" src="images/paw.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="64"></td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-top:20px;text-align:center;width:100%;">
        <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 19px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Wild Species</strong></h3>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:40px;padding-left:10px;padding-right:10px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #8d8d8d; line-height: 1.8; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30.6px;"><span style="font-size:17px;">Ensure the world???s most iconic species, including</span></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; background-color: #91e8e3; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center; padding-top: 25px;">
        <table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tbody><tr>
        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Climate Change" class="icon" height="64" src="images/sun.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="64"></td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-top:20px;text-align:center;width:100%;">
        <h3 style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 19px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Climate Change</strong></h3>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:40px;padding-left:10px;padding-right:10px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #363333; line-height: 1.8; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30.6px;"><span style="font-size:17px;">Ensure the world???s most iconic species, including</span></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center; padding-top: 25px;">
        <table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tbody><tr>
        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Water Shortage" class="icon" height="64" src="images/water.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="64"></td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-top:10px;text-align:center;width:100%;">
        <h3 style="margin: 0; color: #ffffff; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 19px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Fresh Water</strong></h3>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:40px;padding-left:10px;padding-right:10px;padding-top:20px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #8d8d8d; line-height: 1.8; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 30.6px;"><span style="font-size:17px;">Ensure the world???s most iconic species, including</span></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:60px;line-height:60px;font-size:1px;">&hairsp;</div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:65px;line-height:65px;font-size:1px;">&hairsp;</div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #000000;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:65px;line-height:65px;font-size:1px;">&hairsp;</div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('images/jungle_2.png'); background-position: center top; background-repeat: repeat;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-top:95px;text-align:center;width:100%;">
        <h1 style="margin: 0; color: #000000; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 43px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>SAFEGUARD NATURE</strong></h1>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 14px; mso-line-height-alt: 25.2px; color: #363333; line-height: 1.8; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 36px;"><span style="font-size:20px;">Ensure the world???s most iconic species, including tigers, rhinos, and elephants, are secured and recovering in the wild</span></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:70px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
        <div align="center" class="alignment">
        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:44px;width:183px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#0B4E63" fillcolor="#0b4e63"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Georgia, serif; font-size:16px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0b4e63;border-radius:4px;width:auto;border-top:1px solid #0B4E63;font-weight:undefined;border-right:1px solid #0B4E63;border-bottom:1px solid #0B4E63;border-left:1px solid #0B4E63;padding-top:5px;padding-bottom:5px;font-family:TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:35px;padding-right:35px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>LEARN MORE</strong></span></span></a>
        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0b4e63;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:65px;line-height:65px;font-size:1px;">&hairsp;</div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0b4e63;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:5px;">
        <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>About Us</strong></h1>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 24px; color: #ffffff; line-height: 2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,&nbsp;</p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        <td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:5px;">
        <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Links</strong></h1>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: none; color: #ffffff;" target="_blank">Nature</a></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: none; color: #ffffff;" target="_blank">Get Involved</a></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: none; color: #ffffff;" target="_blank">Climate Change</a></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: none; color: #ffffff;" target="_blank">Unsubscribe</a></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        <td class="column column-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="33.333333333333336%">
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-left:20px;text-align:center;width:100%;padding-top:5px;">
        <h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 18px; font-weight: normal; line-height: 200%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Contact</strong></h1>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: none; color: #ffffff;" target="_blank">Info@company.com</a></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:10px;">
        <div style="font-family: sans-serif">
        <div class="txtTinyMce-wrapper" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #a9a9a9; line-height: 1.2; font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif;">
        <p style="margin: 0; font-size: 14px;"><a href="http://www.example.com" rel="noopener" style="text-decoration: none; color: #ffffff;" target="_blank">Help Center</a></p>
        </div>
        </div>
        </td>
        </tr>
        </tbody></table>
        <table border="0" cellpadding="0" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
        <div class="alignment" style="text-align:left;">
        <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="144px">
        <tbody><tr>
        <td style="padding:0 4px 0 0;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"></a></td>
        <td style="padding:0 4px 0 0;"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"></a></td>
        <td style="padding:0 4px 0 0;"><a href="https://www.linkedin.com/" target="_blank"><img alt="Linkedin" height="32" src="images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"></a></td>
        <td style="padding:0 4px 0 0;"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"></a></td>
        </tr>
        </tbody></table>
        </div>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0b4e63;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <div class="spacer_block" style="height:65px;line-height:65px;font-size:1px;">&hairsp;</div>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
        <tbody>
        <tr>
        <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
        <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
        <tbody><tr>
        <td class="alignment" style="vertical-align: middle; text-align: center;">
        <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
        <!--[if !vml]><!-->
        <table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;">
        <!--<![endif]-->
        <tbody><tr>
        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="images/bee.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"></a></td>
        <td style="font-family: TimesNewRoman, Times New Roman, Times, Beskerville, Georgia, serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody></table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table><!-- End -->
        
        </body></html>`
     
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          res.json({
            "action":"send successfully"
          })
        }
      });
})

const port = process.env.PORT||5000

app.listen(port,()=>{
    console.log("run server");
})