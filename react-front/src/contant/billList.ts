import dayjs from 'dayjs'

// ------------------------------
// 1. 定义类型（解决 any / never）
// ------------------------------
export type BillType = 'pay' | 'income'

export interface BillItem {
  type: BillType
  money: number
  date: string | Date
  useFor: string
}

interface SubType {
  type: string
  name: string
}

interface Category {
  type: string
  name: string
  list: SubType[]
}

interface BillListData {
  pay: Category[]
  income: Category[]
}

// ------------------------------
// 2. 分类数据（无 any）
// ------------------------------
export const billListData: BillListData = {
  pay: [
    {
      type: 'foods',
      name: '餐饮',
      list: [
        { type: 'food', name: '餐费' },
        { type: 'drinks', name: '酒水饮料' },
        { type: 'dessert', name: '甜品零食' },
      ],
    },
    {
      type: 'taxi',
      name: '出行交通',
      list: [
        { type: 'taxi', name: '打车租车' },
        { type: 'longdistance', name: '旅行票费' },
      ],
    },
    {
      type: 'recreation',
      name: '休闲娱乐',
      list: [
        { type: 'bodybuilding', name: '运动健身' },
        { type: 'game', name: '休闲玩乐' },
        { type: 'audio', name: '媒体影音' },
        { type: 'travel', name: '旅游度假' },
      ],
    },
    {
      type: 'daily',
      name: '日常支出',
      list: [
        { type: 'clothes', name: '衣服裤子' },
        { type: 'bag', name: '鞋帽包包' },
        { type: 'book', name: '知识学习' },
        { type: 'promote', name: '能力提升' },
        { type: 'home', name: '家装布置' },
      ],
    },
    {
      type: 'other',
      name: '其他支出',
      list: [{ type: 'community', name: '社区缴费' }],
    },
  ],
  income: [
    {
      type: 'professional',
      name: '工资奖金',
      list: [
        { type: 'salary', name: '工资' },
        { type: 'overtimepay', name: '加班' },
        { type: 'bonus', name: '奖金' },
      ],
    },
    {
      type: 'other',
      name: '其他收入',
      list: [
        { type: 'financial', name: '理财收入' },
        { type: 'cashgift', name: '礼金收入' },
      ],
    },
  ],
}

// ------------------------------
// 3. 类型映射（无 any）
// ------------------------------
export const billTypeToName: Record<string, string> = Object.keys(billListData).reduce((prev, key) => {
  billListData[key as BillType].forEach((bill) => {
    bill.list.forEach((item) => {
      prev[item.type] = item.name
    })
  })
  return prev
}, {} as Record<string, string>)

// ------------------------------
// 4. 统计函数（带类型，解决 never 报错）
// ------------------------------
export const getOverview = (data: BillItem[] = []) => {
  return data.reduce(
    (prev, item) => {
      return {
        ...prev,
        date: item.date,
        [item.type]: prev[item.type] + Math.abs(item.money),
      }
    },
    { pay: 0, income: 0, date: null } as {
      pay: number
      income: number
      date: string | Date | null
    }
  )
}

// ------------------------------
// 5. 按月统计（带类型）
// ------------------------------
export const getMonthOverview = (data: BillItem[], month: number) => {
  const bill = data.filter(item => {
    return month === dayjs(item.date).get('month')
  })
  return getOverview(bill)
}