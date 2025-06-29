/**
 * Byline CMS
 *
 * Copyright © 2025 Anthony Bouch and contributors.
 *
 * This file is part of Byline CMS.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js
// https://github.com/mui/material-ui/blob/master/LICENSE

import type {
  UsePaginationItem,
  UsePaginationProps,
  UsePaginationResult,
} from './types/usePagination'

export function usePagination(props: UsePaginationProps): UsePaginationResult {
  const {
    boundaryCount = 1,
    count = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    page = 1,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props

  const handleClick = (event: any, value: number): void => {
    if (handleChange != null) {
      handleChange(event, value)
    }
  }

  // https://dev.to/namirsab/comment/2050
  const range = (start: number, end: number): number[] => {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }

  const startPages = range(1, Math.min(boundaryCount, count))
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count)

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Greater than startPages
    boundaryCount + 2
  )

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  )

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ['first'] : []),
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['start-ellipsis']
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? ['end-ellipsis']
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

    ...endPages,
    ...(hideNextButton ? [] : ['next']),
    ...(showLastButton ? ['last'] : []),
  ]

  // Map the button type to its page number
  const buttonPage = (type: string): number => {
    switch (type) {
      case 'first':
        return 1
      case 'previous':
        return page - 1
      case 'next':
        return page + 1
      case 'last':
        return count
      default:
        return 1
    }
  }

  // Convert the basic item list to PaginationItem props objects
  const items = itemList.map((item) => {
    return typeof item === 'number'
      ? ({
          onClick: (event: any): void => {
            handleClick(event, item)
          },
          type: 'page',
          page: item,
          selected: item === page,
          disabled: item === page,
          'aria-current': item === page ? 'true' : undefined,
        } satisfies UsePaginationItem)
      : ({
          onClick: (event: any): void => {
            handleClick(event, buttonPage(item))
          },
          type: item as UsePaginationItem['type'],
          page: buttonPage(item),
          selected: false,
          disabled:
            disabled ||
            (!item.includes('ellipsis') &&
              (item === 'next' || item === 'last' ? page >= count : page <= 1)),
        } satisfies UsePaginationItem)
  })

  return {
    items,
    ...other,
  }
}
