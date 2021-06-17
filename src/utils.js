
import moment from 'moment'

export function formatZonedDate(zndate){
   return moment(zndate).format("LLL")
}