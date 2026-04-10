#!/usr/bin/env python3
"""TASK 01"""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Blabla"""
    return [value async for value in async_generator()]
