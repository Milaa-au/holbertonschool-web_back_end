#!/usr/bin/env python3
"""TASK 2"""

from time import time
from asyncio import run

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Retourne task"""
    start = time()
    run(wait_n(n, max_delay))
    return (time() - start) / n
