var font = '\'webFont\', \'Arial Narrow\', sans-serif';
var bannerTexts = {};

bannerText_1     = "НАВЕДИ ОРУДИЕ";
bannerText_1_1   = "НА ПРОТИВНИКА";
bannerText_2     = "НАВЕДИ НА РУЧКУ,";
bannerText_2_1   = "ЧТОБЫ УПРАВЛЯТЬ";
bannerText_3     = "ОРУДИЕМ";
bannerText_4     = "УПРАВЛЯЙ";
bannerText_4_1   = "ТАНКОМ";
bannerText_5     = "В ИГРЕ!";
bannerText_6     = "ЗАДАНИЕ";
bannerText_6_1   = "НЕ ВЫПОЛНЕНО";
bannerText_7     = "ПОПРОБУЙ";
bannerText_7_1   = "ЕЩЁ РАЗ";
bannerText_8     = "ОСТАЛОСЬ:";
bannerText_9     = "0:";
bannerText_10    = "ПОПРОБОВАТЬ ЕЩЁ РАЗ";

buttonText       = "ИГРАТЬ";
buttonText2      = "БЕСПЛАТНО";
buttonFont       = "bold 12pt "+ font;
ageFont          = "10pt "+ font;

bannerText_1_font     = "bold 12pt "+ font;
bannerText_1_1_font   = "bold 12pt "+ font;
bannerText_2_font     = "bold 12pt "+ font;
bannerText_2_1_font   = "bold 12pt "+ font;
bannerText_3_font     = "bold 12pt "+ font;
bannerText_4_font     = "bold 20pt "+ font;
bannerText_4_1_font   = "bold 20pt "+ font;
bannerText_5_font     = "bold 20pt "+ font;
bannerText_6_font     = "bold 15pt "+ font;
bannerText_6_1_font   = "bold 15pt "+ font;
bannerText_7_font     = "bold 12pt "+ font;
bannerText_7_1_font   = "bold 12pt "+ font;
bannerText_8_font     = "7pt "+ font;
bannerText_9_font     = "bold 20pt "+ font;
bannerText_10_font    = "bold 7pt "+ font;

bannerText_4_y     = -32;
bannerText_4_1_y   = 0;
bannerText_5_y     = 32;
bannerText_6_y     = -36;
bannerText_6_1_y   = -10;
bannerText_7_y     = 16;
bannerText_7_1_y   = 38;

function drawTextInTextPlate(ctx,ptObj)
{
	if(plateStatus === 0)
	{
	  ctx.font = bannerText_1_font;
      ctx.fillText(bannerText_1, 0, ptObj.height / 2 - 10);
      ctx.font = bannerText_1_1_font;
      ctx.fillText(bannerText_1_1, 0, ptObj.height / 2 + 10);
	}else{
		ctx.font = bannerText_2_font;
		ctx.fillText(bannerText_2, 0, ptObj.height / 2 -20);
		ctx.font = bannerText_2_1_font;
		ctx.fillText(bannerText_2_1, 0, ptObj.height /2);
		ctx.font = bannerText_3_font;
		ctx.fillText(bannerText_3, 0, ptObj.height/2 + 20);
	}
}
