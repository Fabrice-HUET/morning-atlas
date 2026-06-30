import { fulMedamesRecipe } from '@/data/recipes/north-africa/egypt/ful-medames'
import { msemenRecipe } from '@/data/recipes/north-africa/morocco/msemen'
import { lablabiRecipe } from '@/data/recipes/north-africa/tunisia/lablabi'
import { chaiAndMandaziRecipe } from '@/data/recipes/east-africa/regional/chai-and-mandazi'
import { canjeeroRecipe } from '@/data/recipes/east-africa/somalia/canjeero'
import { chipsiMayaiRecipe } from '@/data/recipes/east-africa/tanzania/chipsi-mayai'
import { katogoRecipe } from '@/data/recipes/east-africa/uganda/katogo'
import { dimSumRecipe } from '@/data/recipes/asia/china/cantonese/dim-sum'
import { youTiaoRecipe } from '@/data/recipes/asia/china/mainland/you-tiao'
import { jianbingRecipe } from '@/data/recipes/asia/china/shandong/jianbing'
import { rutiWithDalAndVegetableCurryRecipe } from '@/data/recipes/asia/bangladesh/ruti-with-dal-and-vegetable-curry'
import { parathaWithCurryRecipe } from '@/data/recipes/asia/india/north/paratha-with-curry'
import { idliSambarRecipe } from '@/data/recipes/asia/india/south/idli-sambar'
import { kandePoheRecipe } from '@/data/recipes/asia/india/west/kande-pohe'
import { barbariBreakfastRecipe } from '@/data/recipes/asia/iran/barbari-breakfast'
import { israeliBreakfastRecipe } from '@/data/recipes/asia/israel/israeli-breakfast'
import { japaneseSteamedRiceAndMisoSoupRecipe } from '@/data/recipes/asia/japan/japanese-steamed-rice-and-miso-soup'
import { koreanRiceAndBanchanRecipe } from '@/data/recipes/asia/korea/korean-rice-and-banchan'
import { buburAyamRecipe } from '@/data/recipes/asia/indonesia/bubur-ayam'
import { nasiLemakRecipe } from '@/data/recipes/asia/malaysia/nasi-lemak'
import { htaminGyawRecipe } from '@/data/recipes/asia/myanmar/htamin-gyaw'
import { tapsilogRecipe } from '@/data/recipes/asia/philippines/tapsilog'
import { kayaToastRecipe } from '@/data/recipes/asia/singapore/kaya-toast'
import { menemenRecipe } from '@/data/recipes/asia/turkey/menemen'
import { cubanTostadaCafeConLecheRecipe } from '@/data/recipes/caribbean/cuba/cuban-tostada-cafe-con-leche'
import { jamaicanAckeeAndSaltfishRecipe } from '@/data/recipes/caribbean/jamaica/jamaican-ackee-and-saltfish'
import { costaRicanGalloPintoRecipe } from '@/data/recipes/central-america/costa-rica/costa-rican-gallo-pinto'
import { bulgarianBanitsaRecipe } from '@/data/recipes/europe/bulgaria/bulgarian-banitsa'
import { frenchTartinesRecipe } from '@/data/recipes/europe/france/tartines'
import { germanBrotchenBreakfastRecipe } from '@/data/recipes/europe/germany/german-brotchen-breakfast'
import { greekYogurtWithHoneyRecipe } from '@/data/recipes/europe/greece/greek-yogurt-with-honey'
import { italianPrimaColazioneRecipe } from '@/data/recipes/europe/italy/italian-prima-colazione'
import { boterhamMetHagelslagRecipe } from '@/data/recipes/europe/netherlands/boterham-met-hagelslag'
import { polishKanapkiRecipe } from '@/data/recipes/europe/poland/polish-kanapki'
import { portuguesePaoComManteigaGalaoRecipe } from '@/data/recipes/europe/portugal/portuguese-pao-com-manteiga-galao'
import { russianKashaRecipe } from '@/data/recipes/europe/russia/russian-kasha'
import { chocolateConChurrosRecipe } from '@/data/recipes/europe/spain/chocolate-con-churros'
import { swissBircherMuesliRecipe } from '@/data/recipes/europe/switzerland/swiss-bircher-muesli'
import { fullEnglishBreakfastRecipe } from '@/data/recipes/europe/united-kingdom/full-english-breakfast'
import { canadianHomestyleBreakfastRecipe } from '@/data/recipes/north-america/canada/canadian-homestyle-breakfast'
import { mexicanHuevosRancherosRecipe } from '@/data/recipes/north-america/mexico/mexican-huevos-rancheros'
import { bagelWithCreamCheeseRecipe } from '@/data/recipes/north-america/united-states/bagel-with-cream-cheese'
import { australianBigBrekkieRecipe } from '@/data/recipes/oceania/australia/australian-big-brekkie'
import { weetBixBowlRecipe } from '@/data/recipes/oceania/australia/weet-bix-bowl'
import { babakauRecipe } from '@/data/recipes/oceania/fiji/babakau'
import { newZealandPorridgeRecipe } from '@/data/recipes/oceania/new-zealand/new-zealand-porridge'
import { colombianChanguaRecipe } from '@/data/recipes/south-america/colombia/colombian-changua'
import { venezuelanCachapasRecipe } from '@/data/recipes/south-america/venezuela/venezuelan-cachapas'
import { putuPapRecipe } from '@/data/recipes/southern-africa/south-africa/putu-pap'
import { ampesiRecipe } from '@/data/recipes/west-africa/ghana/ampesi'
import { kosaiRecipe } from '@/data/recipes/west-africa/nigeria/kosai'
import { ogiRecipe } from '@/data/recipes/west-africa/nigeria/ogi'
import { cafeToubaRecipe } from '@/data/recipes/west-africa/senegal/cafe-touba'
import type { Recipe } from '@/types/recipe'

export const recipes = [
  fulMedamesRecipe,
  msemenRecipe,
  lablabiRecipe,
  kosaiRecipe,
  ogiRecipe,
  cafeToubaRecipe,
  ampesiRecipe,
  putuPapRecipe,
  canjeeroRecipe,
  chaiAndMandaziRecipe,
  chipsiMayaiRecipe,
  katogoRecipe,
  youTiaoRecipe,
  dimSumRecipe,
  jianbingRecipe,
  rutiWithDalAndVegetableCurryRecipe,
  idliSambarRecipe,
  parathaWithCurryRecipe,
  kandePoheRecipe,
  barbariBreakfastRecipe,
  israeliBreakfastRecipe,
  japaneseSteamedRiceAndMisoSoupRecipe,
  koreanRiceAndBanchanRecipe,
  htaminGyawRecipe,
  buburAyamRecipe,
  tapsilogRecipe,
  kayaToastRecipe,
  nasiLemakRecipe,
  menemenRecipe,
  weetBixBowlRecipe,
  australianBigBrekkieRecipe,
  babakauRecipe,
  newZealandPorridgeRecipe,
  polishKanapkiRecipe,
  swissBircherMuesliRecipe,
  boterhamMetHagelslagRecipe,
  chocolateConChurrosRecipe,
  frenchTartinesRecipe,
  fullEnglishBreakfastRecipe,
  russianKashaRecipe,
  italianPrimaColazioneRecipe,
  bulgarianBanitsaRecipe,
  germanBrotchenBreakfastRecipe,
  greekYogurtWithHoneyRecipe,
  portuguesePaoComManteigaGalaoRecipe,
  canadianHomestyleBreakfastRecipe,
  bagelWithCreamCheeseRecipe,
  costaRicanGalloPintoRecipe,
  mexicanHuevosRancherosRecipe,
  jamaicanAckeeAndSaltfishRecipe,
  venezuelanCachapasRecipe,
  colombianChanguaRecipe,
  cubanTostadaCafeConLecheRecipe,
] satisfies Recipe[]
