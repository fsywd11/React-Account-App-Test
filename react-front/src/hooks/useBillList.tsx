import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import dayjs from 'dayjs'

import { getBills } from '@/stores/modules/billStore'

export const useBillList = () => {
  const dispatch = useDispatch()
  const { billList } = useSelector((state: any) => state.billStore)

  useEffect(() => {
    dispatch<any>(getBills());
  }, [dispatch])

  return { billList }
}

export const useYearBillList = (selectedYear: number) => {
  const { billList } = useBillList()
  const yearBills = useMemo(
    () =>
      billList.filter((item: any) => selectedYear === dayjs(item.date).get('year')),
    [billList, selectedYear]
  )

  return yearBills
}

export const useMonthBillList = (selectedYear: number, selectedMonth: number) => {
  const selectedYearBills = useYearBillList(selectedYear)
  const currentBillList = useMemo(
    () =>
      selectedYearBills.filter((item: any) => {
        return selectedMonth === dayjs(item.date).get('month')
      }),
    [selectedYearBills, selectedMonth]
  )

  return currentBillList
}
